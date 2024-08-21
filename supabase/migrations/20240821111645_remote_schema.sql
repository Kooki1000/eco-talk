alter table "public"."trash_schedule" drop column "week_of_month";

alter table "public"."trash_schedule" drop column "weekday_num";

alter table "public"."trash_schedule" alter column "date" set not null;


