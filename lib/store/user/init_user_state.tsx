"use client";

import { User } from "@supabase/supabase-js";
import { useEffect, useRef } from "react";
import { useUser } from "./user";

interface Props {
  user: User | null;
}

export function InitUserState(props: Props) {
  const initState = useRef(false);
  useEffect(() => {
    if (!initState.current) {
      useUser.setState(props);
    }
    initState.current = true;
    return;
  }, [props]);
  return <></>;
}
