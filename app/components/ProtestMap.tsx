"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const protests = [
  { lat: 59.8586, lon: 17.6389, name: "Uppsala, Sweden" },
  { lat: 59.3293, lon: 18.0686, name: "Stockholm, Sweden" },
  { lat: 51.5074, lon: -0.1278, name: "London, England" },
  { lat: 43.6532, lon: -79.3832, name: "Toronto, Canada" },
  { lat: 40.7128, lon: -74.006, name: "New York, United States" },
  { lat: 45.4642, lon: 9.19, name: "Milan, Italy" },
];

export default function ProtestMap() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || mapRef.current) return;

    const map = L.map("map", {
      minZoom: 2,
      maxBoundsViscosity: 1.0,
      maxBounds: [
        [-90, -180],
        [90, 180],
      ],
    }).setView([45, 10], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.divIcon({
      className: "custom-marker-icon",
      html: '<div class="marker-pin"></div>',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    protests.forEach((protest) => {
      L.marker([protest.lat, protest.lon], { icon: customIcon })
        .addTo(map)
        .bindPopup(
          `<div class="custom-popup">
            <h3 class="font-medium">${protest.name}</h3>
          </div>`,
          {
            className: "custom-popup-content",
            closeButton: false,
          }
        );
    });

    const bounds = L.latLngBounds(protests.map((p) => [p.lat, p.lon]));
    map.fitBounds(bounds, { padding: [50, 50] });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .custom-marker-icon {
          background: none;
          border: none;
        }
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
        .custom-popup-content {
          margin-top: -5px;
        }
        .custom-popup-content .leaflet-popup-content-wrapper {
          border-radius: 8px;
          padding: 0;
        }
        .custom-popup-content .leaflet-popup-content {
          margin: 8px 12px;
        }
        .custom-popup {
          text-align: center;
        }
      `}</style>

      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map - Full width on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 order-1">
            <Card className="h-[500px] overflow-hidden">
              <div id="map" className="w-full h-full rounded-lg" />
            </Card>
          </div>

          {/* Content - Below map on mobile, right side on desktop */}
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
