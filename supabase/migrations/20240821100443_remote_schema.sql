alter table "public"."trash_schedule" drop column "info";

alter table "public"."trash_schedule" drop column "weekday";

alter table "public"."trash_schedule" add column "weekday_num" smallint;

drop type "public"."weekday";


