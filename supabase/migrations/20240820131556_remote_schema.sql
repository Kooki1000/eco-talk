alter type "public"."trash_type" rename to "trash_type__old_version_to_be_dropped";

create type "public"."trash_type" as enum ('burnable', 'nonBurnable', 'bulky', 'recyclable', 'plastic', 'other');

create table "public"."addresses" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "city" uuid not null,
    "name" text not null
);


alter table "public"."addresses" enable row level security;

alter table "public"."trash_schedule" alter column type type "public"."trash_type" using type::text::"public"."trash_type";

drop type "public"."trash_type__old_version_to_be_dropped";

alter table "public"."trash_schedule" add column "info" text;

alter table "public"."trash_schedule" alter column "address" set data type uuid using "address"::uuid;

CREATE UNIQUE INDEX addresses_pkey ON public.addresses USING btree (id);

alter table "public"."addresses" add constraint "addresses_pkey" PRIMARY KEY using index "addresses_pkey";

alter table "public"."addresses" add constraint "addresses_city_fkey" FOREIGN KEY (city) REFERENCES cities(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."addresses" validate constraint "addresses_city_fkey";

alter table "public"."trash_schedule" add constraint "trash_schedule_address_fkey" FOREIGN KEY (address) REFERENCES addresses(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."trash_schedule" validate constraint "trash_schedule_address_fkey";

grant delete on table "public"."addresses" to "anon";

grant insert on table "public"."addresses" to "anon";

grant references on table "public"."addresses" to "anon";

grant select on table "public"."addresses" to "anon";

grant trigger on table "public"."addresses" to "anon";

grant truncate on table "public"."addresses" to "anon";

grant update on table "public"."addresses" to "anon";

grant delete on table "public"."addresses" to "authenticated";

grant insert on table "public"."addresses" to "authenticated";

grant references on table "public"."addresses" to "authenticated";

grant select on table "public"."addresses" to "authenticated";

grant trigger on table "public"."addresses" to "authenticated";

grant truncate on table "public"."addresses" to "authenticated";

grant update on table "public"."addresses" to "authenticated";

grant delete on table "public"."addresses" to "service_role";

grant insert on table "public"."addresses" to "service_role";

grant references on table "public"."addresses" to "service_role";

grant select on table "public"."addresses" to "service_role";

grant trigger on table "public"."addresses" to "service_role";

grant truncate on table "public"."addresses" to "service_role";

grant update on table "public"."addresses" to "service_role";


