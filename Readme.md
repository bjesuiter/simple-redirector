# deno-redirector

A simple deno project to redirect to a url.
Useful to be configured like this:

meet.yourdomain.com -> meet.jit.si/yourname

Reason: Normal DNS cannot add PATHs to redirects, can only set CNAMES. or ALIASes.
