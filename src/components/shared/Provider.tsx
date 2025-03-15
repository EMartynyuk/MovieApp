"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

export const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <div
        style={{
          fontSize: "18px",
        }}
      >
        <ReactQueryDevtools initialIsOpen />
      </div>
    </QueryClientProvider>
  );
};
