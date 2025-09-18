# Database Schema

This file contains the Supabase/Postgres table definitions used by Sendex.

## Users

```sql
-- Users table
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  phone text,
  full_name text,
  profile_image_url text,
  bio text,
  location_address text,
  latitude decimal,
  longitude decimal,
  is_verified boolean default false,
  rating_average decimal default 0,
  total_ratings integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

## Errands

```sql
create table if not exists errands (
  id uuid primary key default gen_random_uuid(),
  poster_id uuid references users(id),
  -- NOTE: The RLS policies example expects a `user_id` column representing the owner
  -- and an `is_public` boolean to allow public visibility. Keep both if you plan to
  -- use the provided RLS policies migration.
  user_id uuid references users(id),
  is_public boolean default true,
  runner_id uuid references users(id),
  runner_id uuid references users(id),
  title text,
  description text,
  category text,
  location_address text,
  latitude decimal,
  longitude decimal,
  budget decimal,
  preferred_completion_time timestamp with time zone,
  priority_level integer default 0,
  status text default 'posted',
  images text[],
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  completed_at timestamp with time zone
);
```

## Messages

```sql
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  errand_id uuid references errands(id),
  sender_id uuid references users(id),
  receiver_id uuid references users(id),
  content text,
  image_url text,
  is_read boolean default false,
  created_at timestamp with time zone default now()
);
```

## Reviews

```sql
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  errand_id uuid references errands(id),
  reviewer_id uuid references users(id),
  reviewee_id uuid references users(id),
  rating integer,
  comment text,
  created_at timestamp with time zone default now()
);
```
