alter table "public"."translations" drop constraint "translations_pkey";

drop index if exists "public"."translations_pkey";

alter table "public"."translations" alter column "id" set default gen_random_uuid();

alter table "public"."translations" alter column "id" drop identity;

alter table "public"."translations" alter column "id" drop not null;

alter table "public"."translations" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."translations" add constraint "translations_post_fkey1" FOREIGN KEY (post) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."translations" validate constraint "translations_post_fkey1";

alter table "public"."translations" add constraint "translations_reply_fkey1" FOREIGN KEY (reply) REFERENCES replies(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."translations" validate constraint "translations_reply_fkey1";


