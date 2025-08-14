# Airbnb Turbo Pack – Next.js + Tailwind

## Variables de entorno
Crea un archivo `.env.local` en la raíz con:
```
NEXT_PUBLIC_TALLY_URL=https://tally.so/r/REPLACE_ME
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/34XXXXXXXXX?text=Hola%20vengo%20de%20la%20web%20y%20quiero%20mejorar%20mi%20anuncio%20😊
```
En Vercel, añade estas mismas variables en **Settings → Environment Variables** antes de desplegar.

## Dev local
```
npm install
npm run dev
```

## Build
```
npm run build && npm start
```
