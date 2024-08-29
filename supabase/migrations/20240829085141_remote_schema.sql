create policy "All images are publicly available. 1hys5dx_0"
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'post-images'::text));


create policy "Authenticated users can insert and delete images. 1hys5dx_0"
on "storage"."objects"
as permissive
for insert
to authenticated
with check ((bucket_id = 'post-images'::text));


create policy "Authenticated users can insert and delete images. 1hys5dx_1"
on "storage"."objects"
as permissive
for delete
to authenticated
using ((bucket_id = 'post-images'::text));



