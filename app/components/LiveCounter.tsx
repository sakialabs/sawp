"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function LiveCounter() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <Card className="card">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-[--primary] mb-2">237</div>
          <p className="text-zinc-600 dark:text-zinc-400">Protests Organized</p>
        </CardContent>
      </Card>
      <Card className="card">
        <CardContent className="p-6 text-center">
          <div className="text-4xl font-bold text-[--primary] mb-2">2,458</div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Participants Worldwide
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
