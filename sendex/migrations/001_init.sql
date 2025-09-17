-- Initial schema for Sendex (Supabase)
-- Run using supabase migrations or psql

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

-- Errands table
create table if not exists errands (
  id uuid primary key default gen_random_uuid(),
  poster_id uuid references users(id),
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
