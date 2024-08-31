alter table "public"."profiles" drop column "avatar";

alter table "public"."profiles" add column "avatar_url" text;

alter table "public"."profiles" add column "full_name" text;

alter table "public"."replies" add column "post" uuid not null;

alter table "public"."replies" add constraint "replies_post_fkey" FOREIGN KEY (post) REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."replies" validate constraint "replies_post_fkey";

create policy "Enable read access for all users"
on "public"."trash_schedule"
as permissive
for select
to public
using (true);



