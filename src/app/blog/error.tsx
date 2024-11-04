// app/rota/error.tsx

'use client';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div className="loading-error">
            <h1 className="title">Oops! Something went wrong.</h1>
            <p>{error.message}</p>
            <button className="btn errorMessage" onClick={() => reset()}>Try again</button>
        </div>
    );
}
