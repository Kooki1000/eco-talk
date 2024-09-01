alter table "public"."translations" drop column "langCode";

alter table "public"."translations" add column "lang_code" text not null;

create policy "Enable insert for authenticated users only"
on "public"."translations"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."translations"
as permissive
for select
to public
using (true);



