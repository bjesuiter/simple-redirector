import json5 from "https://deno.land/x/json5@v1.0.0/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const configRaw = json5.parse(await Deno.readTextFile("./config.json5"));

const { redirects } = z.object({
  redirects: z.record(z.string(), z.string()),
}).parse(configRaw);

const handler = (request: Request, _info: any) => {
  const reqUrl = new URL(request.url);
  const targetUrl = redirects[reqUrl.hostname];

  if (!targetUrl) {
    return new Response(
      `No redirect mapping found for request hostname "${reqUrl.hostname}" `,
      { status: 404 },
    );
  }

  return new Response(undefined, {
    // 302: Moved Temporarily - needed because 301 is cached by browsers
    status: 302,
    headers: {
      location: targetUrl,
    },
  });
};

Deno.serve(handler);
