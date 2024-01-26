const targetUrl = Deno.env.get("TARGET_URL");

if (!targetUrl) {
  console.error("TARGET_URL environment variable is not set");
} else {
  const handler = (_request: Request, _info: any) => {
    return new Response(undefined, {
      status: 301,
      headers: {
        location: targetUrl,
      },
    });
  };

  Deno.serve(handler);
}
