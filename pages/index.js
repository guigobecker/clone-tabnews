import Head from "next/head";

function Home() {
    return (
        <>
            <Head>
                <title>Tetê 💗</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Nunito:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className="page">
                    <div className="hearts" aria-hidden="true">
                        <span className="heart h1">❤</span>
                        <span className="heart h2">❤</span>
                        <span className="heart h3">❤</span>
                        <span className="heart h4">❤</span>
                        <span className="heart h5">❤</span>
                        <span className="heart h6">❤</span>
                    </div>
                <section className="card" aria-label="Mensagem de amor">
                    <h1>eu te amo meu amorzinho lindo do meu coração 💗💗💗</h1>
                </section>
            </main>

            <style jsx>{`
                :global(html),
                :global(body),
                :global(#__next) {
                    margin: 0;
                    min-height: 100%;
                }

                .page {
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    padding: 20px 28px;
                    background:
                        radial-gradient(circle at 20% 15%, #ffd9e6 0%, transparent 40%),
                        radial-gradient(circle at 80% 25%, #ffe9c8 0%, transparent 38%),
                        linear-gradient(160deg, #fff8f5 0%, #ffeef2 45%, #ffe9dd 100%);
                    font-family: "Nunito", "Segoe UI", sans-serif;
                }
                    .hearts {
                        position: absolute;
                        inset: 0;
                        pointer-events: none;
                    }

                    .heart {
                        position: absolute;
                        bottom: -12vh;
                        color: #ff4f87;
                        opacity: 0;
                        font-size: clamp(1rem, 4vw, 1.8rem);
                        filter: drop-shadow(0 4px 10px rgba(209, 77, 119, 0.4));
                        animation: riseHeart 5.8s ease-out infinite;
                    }

                    .h1 {
                        left: 8%;
                        animation-delay: 0s;
                    }

                    .h2 {
                        left: 22%;
                        animation-delay: 0.9s;
                        font-size: clamp(1.2rem, 5vw, 2rem);
                    }

                    .h3 {
                        left: 37%;
                        animation-delay: 1.8s;
                    }

                    .h4 {
                        left: 56%;
                        animation-delay: 0.5s;
                        font-size: clamp(1.1rem, 4.5vw, 1.9rem);
                    }

                    .h5 {
                        left: 73%;
                        animation-delay: 1.4s;
                    }

                    .h6 {
                        left: 88%;
                        animation-delay: 2.2s;
                        font-size: clamp(1.25rem, 5vw, 2.1rem);
                    }

                .card {
                    --bubble-bg: rgba(255, 255, 255, 0.72);
                    --bubble-stroke: rgba(255, 255, 255, 0.65);
                    position: relative;
                    isolation: isolate;
                    box-sizing: border-box;
                    width: min(88vw, 390px);
                    border-radius: 28px;
                    padding: 18px 16px;
                    text-align: center;
                    background: var(--bubble-bg);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    box-shadow:
                        0 18px 35px rgba(202, 94, 130, 0.18),
                        inset 0 0 0 1px var(--bubble-stroke);
                    animation: fadeInUp 700ms ease-out both;
                }

                .card::before {
                    content: "";
                    position: absolute;
                    left: 22px;
                    bottom: -14px;
                    width: 28px;
                    height: 20px;
                    background: var(--bubble-bg);
                    border-radius: 3px 0 14px 16px;
                    transform: skewX(-28deg);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    box-shadow:
                        7px 10px 16px rgba(202, 94, 130, 0.14),
                        inset 0 0 0 1px var(--bubble-stroke);
                    z-index: -1;
                }

                .card::after {
                    content: "";
                    position: absolute;
                    left: 12px;
                    bottom: -24px;
                    width: 12px;
                    height: 12px;
                    background: var(--bubble-bg);
                    border-radius: 50%;
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    box-shadow:
                        5px 8px 14px rgba(202, 94, 130, 0.12),
                        inset 0 0 0 1px var(--bubble-stroke);
                    z-index: -1;
                }

                .eyebrow {
                    margin: 0;
                    font-size: 0.8rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: #b45c74;
                }

                h1 {
                    margin: 12px 0 10px;
                    line-height: 1.25;
                    font-size: clamp(1.6rem, 7vw, 2.3rem);
                    color: #7f2741;
                    font-weight: 700;
                    text-wrap: balance;
                }

                .signature {
                    margin: 4px 0 0;
                    font-family: "Great Vibes", cursive;
                    font-size: clamp(2rem, 10vw, 2.8rem);
                    color: #d14d77;
                    line-height: 1;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(14px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                    @keyframes riseHeart {
                        0% {
                            opacity: 0;
                            transform: translateY(0) translateX(0) scale(0.8) rotate(0deg);
                        }
                        15% {
                            opacity: 0.75;
                        }
                        55% {
                            opacity: 0.85;
                            transform: translateY(-45vh) translateX(-8px) scale(1.05) rotate(-7deg);
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(-95vh) translateX(10px) scale(1.15) rotate(8deg);
                        }
                    }

                @media (min-width: 768px) {
                    .page {
                        padding: 40px;
                    }

                    .card {
                        border-radius: 34px;
                        padding: 38px 34px;
                    }

                    .eyebrow {
                        font-size: 0.88rem;
                    }
                }
            `}</style>
        </>
    );
}

export default Home;