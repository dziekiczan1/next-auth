"use client";

import { useTransition } from "react";

import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SettingsPage = () => {
  const [isPending, setTransition] = useTransition();

  const onClick = () => {
    setTransition(() => {
      settings({
        name: "test",
      });
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Button disabled={isPending} onClick={onClick}>
          Update name
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
