// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

import { corsHeaders } from '../_shared/cors.ts';

console.log(`Function "translate" up and running!`);

Deno.serve(async (req) => {
  const { content, postId, replyId, langCode } = await req.json();

  const deeplApiUrl = 'https://api-free.deepl.com/v2/translate';
  const deeplAuthKey = Deno.env.get('DEEPL_KEY');

  const deeplResponse = await fetch(deeplApiUrl, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${deeplAuthKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: [content],
      target_lang: langCode,
    }),
  }).catch((error) => {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  });

  const deeplData = await deeplResponse.json();

  try {
    const supabaseClient = createClient(
      Deno.env.get('SB_URL'),
      Deno.env.get('SB_ANON_KEY')
    );

    const normalizedLangCode =
      langCode === 'EN-US' ? 'en' : langCode.toLowerCase();

    const { data, error } = await supabaseClient.from('translations').insert({
      content: deeplData.translations.text,
      post: postId,
      reply: replyId,
      lang_code: normalizedLangCode,
    });

    if (error) throw error;

    return new Response(JSON.stringify({ data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/translate' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
