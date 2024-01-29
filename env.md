// backend

DATABASE_TYPE=postgres
DATABASE_URL=postgres://default:KoSBl0T1AYUu@ep-still-field-51970156.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require
MEDUSA_ADMIN_ONBOARDING_TYPE=default
STORE_CORS=http://localhost:8000,http://localhost:7001

// front end

# Your Medusa backend, should be updated to where you are hosting your server. Remember to update CORS settings for your server. See – https://docs.medusajs.com/usage/configurations#admin_cors-and-store_cors
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000

# Your store URL, should be updated to where you are hosting your storefront.
NEXT_PUBLIC_BASE_URL=http://localhost:8000

# Your preferred default region. When middleware cannot determine the user region from the "x-vercel-country" header, the default region will be used. ISO-2 lowercase format. 
NEXT_PUBLIC_DEFAULT_REGION=us

# Your Stripe public key. See – https://docs.medusajs.com/add-plugins/stripe
NEXT_PUBLIC_STRIPE_KEY=

# Your PayPal Client ID. See – https://docs.medusajs.com/add-plugins/paypal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=

# Your MeiliSearch / Algolia keys. See – https://docs.medusajs.com/add-plugins/meilisearch or https://docs.medusajs.com/add-plugins/algolia
NEXT_PUBLIC_SEARCH_APP_ID=
NEXT_PUBLIC_SEARCH_ENDPOINT=http://127.0.0.1:7700
NEXT_PUBLIC_SEARCH_API_KEY=
NEXT_PUBLIC_INDEX_NAME=products

# Your Next.js revalidation secret. See – https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation
REVALIDATE_SECRET=supersecret