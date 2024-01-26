const targetUrl = Deno.env.get("TARGET_URL");

if (!targetUrl) {
  console.error("TARGET_URL environment variable is not set");
  Deno.exit(0);
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
