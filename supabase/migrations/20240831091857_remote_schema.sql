drop policy "Anyone can upload an avatar." on "storage"."objects";

create policy "Authenticated users can upload avatars. 1oj01fe_0"
on "storage"."objects"
as permissive
for insert
to authenticated
with check ((bucket_id = 'avatars'::text));



