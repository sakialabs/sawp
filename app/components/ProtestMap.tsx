"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const protests = [
  { lat: 59.8586, lon: 17.6389, name: "Uppsala, Sweden" },
  { lat: 59.3293, lon: 18.0686, name: "Stockholm, Sweden" },
  { lat: 51.5074, lon: -0.1278, name: "London, England" },
  { lat: 43.6532, lon: -79.3832, name: "Toronto, Canada" },
  { lat: 40.7128, lon: -74.006, name: "New York, United States" },
  { lat: 45.4642, lon: 9.19, name: "Milan, Italy" },
  { lat: 48.8566, lon: 2.3522, name: "Paris, France" },
  { lat: 52.52, lon: 13.405, name: "Berlin, Germany" },
  { lat: 55.6761, lon: 12.5683, name: "Copenhagen, Denmark" },
  { lat: 60.1699, lon: 24.9384, name: "Helsinki, Finland" },
  { lat: 59.9139, lon: 10.7522, name: "Oslo, Norway" },
  { lat: 50.8503, lon: 4.3517, name: "Brussels, Belgium" },
  { lat: 52.2297, lon: 21.0122, name: "Warsaw, Poland" },
  { lat: 37.7749, lon: -122.4194, name: "San Francisco, United States" },
  { lat: 34.0522, lon: -118.2437, name: "Los Angeles, United States" },
  { lat: 41.8781, lon: -87.6298, name: "Chicago, United States" },
  { lat: 45.5017, lon: -73.5673, name: "Montreal, Canada" },
  { lat: 49.2827, lon: -123.1207, name: "Vancouver, Canada" },
];

export default function ProtestMap() {
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !mapContainerRef.current ||
      mapRef.current
    )
      return;

    // Calculate initial bounds
    const bounds = new maplibregl.LngLatBounds();
    protests.forEach((protest) => {
      bounds.extend([protest.lon, protest.lat]);
    });

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          "osm-tiles": {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
        layers: [
          {
            id: "osm-tiles",
            type: "raster",
            source: "osm-tiles",
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      bounds: bounds,
      fitBoundsOptions: {
        padding: 50,
        maxZoom: 2, // Adjusted to zoom out further
      },
      minZoom: 1, // Allow the map to zoom out more
      maxZoom: 19,
    });

    // Add markers for each protest location
    protests.forEach((protest) => {
      // Create marker element
      const markerEl = document.createElement("div");
      const pin = document.createElement("div");
      pin.className = "marker-pin";
      markerEl.appendChild(pin);

      // Create popup
      const popup = new maplibregl.Popup({
        offset: [0, -30],
        closeButton: false,
        className: "custom-popup",
      }).setHTML(`
        <div class="popup-content">
          <h3>${protest.name}</h3>
        </div>
      `);

      // Add marker to map
      new maplibregl.Marker({ element: markerEl })
        .setLngLat([protest.lon, protest.lat])
        .setPopup(popup)
        .addTo(map);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .marker-pin {
          width: 20px;
          height: 20px;
          border-radius: 50% 50% 50% 0;
          background: #d21034;
          position: absolute;
          transform: rotate(-45deg);
          left: 50%;
          top: 50%;
          margin: -15px 0 0 -15px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .marker-pin::after {
          content: "";
          width: 12px;
          height: 12px;
          margin: 4px 0 0 4px;
          background: #fff;
          position: absolute;
          border-radius: 50%;
        }

        .maplibregl-popup {
          z-index: 1;
        }

        .maplibregl-popup-anchor-top .maplibregl-popup-tip,
        .maplibregl-popup-anchor-top-left .maplibregl-popup-tip,
        .maplibregl-popup-anchor-top-right .maplibregl-popup-tip {
          border-bottom-color: #fff;
        }

        .maplibregl-popup-anchor-bottom .maplibregl-popup-tip,
        .maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip,
        .maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip {
          border-top-color: #fff;
        }

        .custom-popup .maplibregl-popup-content {
          background: #fff;
          color: #000;
          border-radius: 8px;
          padding: 8px 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .popup-content h3 {
          margin: 0;
          font-weight: 500;
          font-size: 14px;
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          .custom-popup .maplibregl-popup-content {
            background: #1f2937;
            color: #fff;
          }

          .maplibregl-popup-anchor-top .maplibregl-popup-tip,
          .maplibregl-popup-anchor-top-left .maplibregl-popup-tip,
          .maplibregl-popup-anchor-top-right .maplibregl-popup-tip {
            border-bottom-color: #1f2937;
          }

          .maplibregl-popup-anchor-bottom .maplibregl-popup-tip,
          .maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip,
          .maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip {
            border-top-color: #1f2937;
          }
        }

        .maplibregl-canvas {
          outline: none !important;
        }
      `}</style>

      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 order-1">
            <Card className="h-[500px] overflow-hidden">
              <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
            </Card>
          </div>

          <div className="w-full lg:w-1/2 space-y-6 order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Global Solidarity Movement
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-4">
                Initiated by Sudanese women in Sweden, Rabab Khalil Alkarib and
                Adila Salih Elobeid, the first rally took place on August 30,
                2024, in Stockholm and Uppsala. Join us in peaceful
                demonstrations to raise awareness and advocate for lasting peace
                in Sudan.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button className="btn btn-primary w-full sm:w-auto" size="lg">
                Find Protests Near You
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
