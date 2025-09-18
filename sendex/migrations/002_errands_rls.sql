-- 002_errands_rls.sql
-- Example Row Level Security (RLS) policies for the errands table.
-- Apply these in your Supabase/Postgres instance after creating the errands table.

BEGIN;

-- Ensure RLS is enabled
ALTER TABLE IF EXISTS errands ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert errands (they become the owner via 'user_id')
CREATE POLICY "Allow insert for authenticated users" ON errands
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL AND user_id = auth.uid());

-- Allow users to select errands (read) - here we allow all authenticated users to read public errands
CREATE POLICY "Allow authenticated read" ON errands
  FOR SELECT
  USING (is_public IS TRUE OR user_id = auth.uid());

-- Allow owners to update their errands
CREATE POLICY "Allow owner update" ON errands
  FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Allow owners to delete their errands
CREATE POLICY "Allow owner delete" ON errands
  FOR DELETE
  USING (user_id = auth.uid());

COMMIT;
