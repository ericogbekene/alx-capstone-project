# Sendex Development Rules and Guidelines

## Project Context
Sendex is a location-based errand posting and fulfillment platform built with Next.js 14+, Supabase, and TypeScript. This document provides essential guidelines, API references, and best practices for development.

## Technology Stack

### Core Technologies
- **Frontend**: Next.js 14+ (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Language**: TypeScript (strict mode)
- **Maps**: Google Maps JavaScript API
- **File Storage**: Supabase Storage

### Key Dependencies
```json
{
  "next": "^14.2.0",
  "@supabase/supabase-js": "^2.45.0",
  "@supabase/ssr": "^0.4.0",
  "tailwindcss": "^3.4.0",
  "zustand": "^4.5.0",
  "zod": "^3.23.0",
  "@googlemaps/js-api-loader": "^1.16.0",
  "react-hook-form": "^7.52.0",
  "@hookform/resolvers": "^3.6.0"
}
```

## Documentation References

### Official Documentation
- **Next.js 14 App Router**: https://nextjs.org/docs/app
- **Supabase Docs**: https://supabase.com/docs
- **Supabase Auth**: https://supabase.com/docs/guides/auth
- **Supabase Realtime**: https://supabase.com/docs/guides/realtime
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/docs
- **Zustand**: https://github.com/pmndrs/zustand
- **Zod Validation**: https://zod.dev/
- **React Hook Form**: https://react-hook-form.com/docs
- **Google Maps JS API**: https://developers.google.com/maps/documentation/javascript

### Specific Implementation Guides
- **Supabase with Next.js App Router**: https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs
- **Next.js Authentication**: https://nextjs.org/docs/app/building-your-application/authentication
- **Tailwind with Next.js**: https://tailwindcss.com/docs/guides/nextjs
- **TypeScript with Next.js**: https://nextjs.org/docs/app/building-your-application/configuring/typescript

## Development Rules and Best Practices

### 1. File Organization
```
src/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── auth/              # Authentication components
│   ├── errands/           # Errand-related components
│   ├── maps/              # Map components
│   ├── messaging/         # Chat/messaging components
│   └── layout/            # Layout components
├── lib/                   # Utility libraries
├── hooks/                 # Custom React hooks
├── store/                 # Zustand stores
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

### 2. TypeScript Guidelines
- **Always use strict TypeScript** - Enable strict mode in tsconfig.json
- **Define proper types** - Create interfaces for all data structures
- **Use Zod for validation** - Validate all form inputs and API responses
- **Type all functions** - Include return types for all functions
- **Avoid `any` type** - Use `unknown` or proper typing instead

### 3. Component Patterns
```typescript
// Use this pattern for components
interface ComponentProps {
  // Define props with proper types
}

export function Component({ prop }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### 4. State Management Rules
- **Use Zustand for global state** - Authentication, user data, app settings
- **Use React state for local state** - Form inputs, UI toggles, temporary data
- **Implement proper state persistence** - For user preferences and session data
- **Follow naming conventions** - `useAuthStore`, `useErrandStore`, etc.

### 5. API and Database Patterns

#### Supabase Client Usage
```typescript
// Client-side operations
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// Server-side operations  
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

// Route handlers
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
```

#### Database Queries
- **Use Row Level Security (RLS)** - Implement proper RLS policies for all tables
- **Type database responses** - Use generated types from Supabase
- **Handle loading states** - Always show loading indicators
- **Implement error handling** - Graceful error handling for all database operations
- **Use optimistic updates** - For better user experience

#### API Route Patterns
```typescript
// app/api/errands/route.ts
export async function GET(request: Request) {
  try {
    // Implementation
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Error message' }, { status: 500 });
  }
}
```

### 6. Authentication Rules
- **Use Supabase Auth** - Don't implement custom authentication
- **Protect routes properly** - Use middleware for route protection
- **Handle auth states** - Loading, authenticated, unauthenticated
- **Implement proper redirects** - After login/logout actions
- **Use server-side auth** - For protected API routes

### 7. UI/UX Guidelines
- **Mobile-first design** - Design for mobile, enhance for desktop
- **Use shadcn/ui components** - Consistent design system
- **Implement proper loading states** - Skeleton screens, spinners
- **Add error boundaries** - Graceful error handling in UI
- **Ensure accessibility** - ARIA labels, keyboard navigation
- **Use semantic HTML** - Proper HTML structure

### 8. Form Handling
```typescript
// Use React Hook Form with Zod validation
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  // Define validation schema
})

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  })
  
  // Form implementation
}
```

### 9. Location and Maps Integration
- **Use Google Maps JavaScript API** - For map displays and location services
- **Implement geolocation** - Request user permission properly
- **Handle location errors** - When geolocation fails or is denied
- **Store coordinates** - Save latitude/longitude for all locations
- **Implement distance calculations** - For nearby errands filtering

### 10. Real-time Features
- **Use Supabase Realtime** - For live updates
- **Implement proper subscriptions** - Clean up subscriptions on unmount
- **Handle connection states** - Online/offline status
- **Optimize real-time queries** - Filter subscriptions properly

## Environment Configuration

### Required Environment Variables
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Sendex
```

### Configuration Files
- **next.config.js** - Next.js configuration with image domains
- **tailwind.config.ts** - Custom Tailwind configuration
- **components.json** - shadcn/ui configuration
- **tsconfig.json** - TypeScript configuration with path mapping

## Database Schema Rules

### Table Naming
- Use lowercase with underscores: `errands`, `user_reviews`
- Use singular nouns: `user` not `users` (Supabase convention)

### Column Naming
- Use snake_case: `created_at`, `user_id`
- Always include `id` as UUID primary key
- Include `created_at` and `updated_at` timestamps
- Use descriptive names: `location_address` not just `address`

### Foreign Keys
- Always reference by ID: `poster_id` references `users(id)`
- Use proper cascade rules: `ON DELETE CASCADE` or `ON DELETE SET NULL`
- Create proper indexes for foreign keys

### Row Level Security (RLS)
```sql
-- Enable RLS on all tables
ALTER TABLE errands ENABLE ROW LEVEL SECURITY;

-- Create policies for each operation
CREATE POLICY "Users can read their own errands" ON errands
  FOR SELECT USING (poster_id = auth.uid() OR runner_id = auth.uid());
```

## API Design Patterns

### REST Endpoints
- `/api/errands` - Collection operations (GET, POST)
- `/api/errands/[id]` - Individual operations (GET, PUT, DELETE)
- `/api/errands/[id]/accept` - Specific actions (POST)

### Response Format
```typescript
// Success response
{
  data: T,
  message?: string
}

// Error response
{
  error: string,
  code?: string,
  details?: any
}
```

### Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Testing Guidelines
- **Unit tests** - For utility functions and hooks
- **Component tests** - For UI components
- **Integration tests** - For API routes
- **E2E tests** - For critical user flows
- **Use React Testing Library** - For component testing
- **Mock external services** - Google Maps, Supabase in tests

## Performance Optimization
- **Use Next.js Image component** - For all images
- **Implement lazy loading** - For non-critical components
- **Use dynamic imports** - For code splitting
- **Optimize database queries** - Use indexes and proper filtering
- **Implement caching** - For static data and API responses
- **Minimize bundle size** - Tree shaking and proper imports

## Security Best Practices
- **Validate all inputs** - Client and server-side validation
- **Use HTTPS** - For all external communications
- **Implement proper CORS** - For API endpoints
- **Sanitize user data** - Prevent XSS attacks
- **Use environment variables** - For sensitive data
- **Implement rate limiting** - For API endpoints
- **Regular security audits** - Review dependencies and code

## Deployment Guidelines
- **Use Vercel** - For Next.js deployment
- **Configure environment variables** - In deployment platform
- **Set up CI/CD pipeline** - GitHub Actions for automated deployment
- **Monitor application** - Error tracking and performance monitoring
- **Database migrations** - Use Supabase migration system
- **Backup strategy** - Regular database backups

## Common Patterns and Solutions

### Authentication Check
```typescript
// Check if user is authenticated
const { data: { session } } = await supabase.auth.getSession()
if (!session) {
  redirect('/login')
}
```

### Location Services
```typescript
// Get user's current location
const getCurrentLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
```

### Real-time Subscriptions
```typescript
// Subscribe to real-time updates
useEffect(() => {
  const subscription = supabase
    .channel('errands')
    .on('postgres_changes', { 
      event: '*', 
      schema: 'public', 
      table: 'errands' 
    }, handleChange)
    .subscribe()

  return () => subscription.unsubscribe()
}, [])
```

### Form Validation
```typescript
// Zod schema for errand creation
const errandSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.enum(['shopping', 'transport', 'petcare', 'admin', 'other']),
  budget: z.number().positive('Budget must be positive'),
  location_address: z.string().min(1, 'Location is required'),
})
```

## Error Handling
- **Use error boundaries** - For React component errors
- **Implement proper logging** - For debugging and monitoring
- **Show user-friendly messages** - Don't expose technical errors
- **Handle network errors** - Offline/online states
- **Validate at multiple layers** - Client, API, and database

## Code Quality Tools
- **ESLint** - For code linting
- **Prettier** - For code formatting
- **TypeScript** - For type checking
- **Husky** - For Git hooks
- **Commitlint** - For commit message standards

Remember to always refer to the official documentation for the most up-to-date information and best practices. This rules file should be updated as the project evolves and new patterns emerge.