const targetUrl = Deno.env.get("TARGET_URL");

if (!targetUrl) {
  throw new Error("TARGET_URL environment variable is not set.");
}

const handler = (_request: Request, _info: any) => {
  return new Response(undefined, {
    status: 301,
    headers: {
      location: targetUrl,
    },
  });
};

Deno.serve(handler);
