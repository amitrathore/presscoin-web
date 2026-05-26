"use client";

export default function Home() {
  const tickerItems = [
    "THE RETURN OF NEWS",
    "REVITALIZING MEDIA",
    "RESTORING DEMOCRACY",
    "REBOOTING ECONOMICS",
    "NEWS DAO",
    "PRESS TOKEN",
    "PEOPLE POWER",
    "PROTOCOL POWER",
    "WEB2.5",
    "FINANCIALLY INDEPENDENT PRESS",
  ];

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", position: "relative", overflow: "hidden" }}>

      {/* Background orbs */}
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />
      <div className="orb orb-lime" />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(8,8,8,0.7)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="PressCoin logo"
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "0.12em",
            color: "#f0f0f0",
          }}>
            PRESS<span className="text-gradient-cv">COIN</span>
          </span>
          <span className="pill pill-cyan" style={{ marginLeft: 8 }}>
            <span className="dot-pulse dot-cyan" />
            2.0
          </span>
        </div>

        <div style={{ display: "flex", gap: 32 }}>
          {["Protocol", "Platform", "People", "DAO", "Token Swap"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="PressCoin"
            style={{
              width: 96,
              height: 96,
              objectFit: "contain",
              filter: "drop-shadow(0 0 32px rgba(255,170,0,0.5))",
              animation: "driftC 20s ease-in-out infinite alternate",
            }}
          />
        </div>

        {/* Top label */}
        <div style={{ marginBottom: 32 }}>
          <span className="pill pill-violet">
            <span className="dot-pulse dot-violet" />
            PressCoin 2.0 is live
          </span>
        </div>

        {/* Main heading */}
        <h1 style={{
          fontFamily: "var(--font-geist-sans)",
          fontWeight: 900,
          fontSize: "clamp(3.5rem, 10vw, 9rem)",
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          marginBottom: 32,
          maxWidth: "900px",
        }}>
          <span className="text-gradient">The Return</span>
          <br />
          <span style={{ color: "#f0f0f0" }}>of News</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.75rem, 2vw, 1rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          maxWidth: 600,
          lineHeight: 2,
          marginBottom: 52,
        }}>
          Revitalizing Media &nbsp;·&nbsp; Restoring Democracy &nbsp;·&nbsp; Rebooting Economics
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#dao" className="btn-neon">Get Involved</a>
          <a
            href="#token-swap"
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "16px 44px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 6,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,255,0,0.4)";
              e.currentTarget.style.color = "var(--lime)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            Token Swap →
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, rgba(0,245,255,0.4), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }} />
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "14px 0",
        background: "rgba(255,255,255,0.02)",
        overflow: "hidden",
      }}>
        <div className="ticker-track" style={{ gap: 0 }}>
          {doubled.map((item, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.25)",
              padding: "0 32px",
              whiteSpace: "nowrap",
            }}>
              {item}
              <span style={{ marginLeft: 32, color: "var(--cyan)", opacity: 0.5 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── DAO SECTION ── */}
      <section id="dao" style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 80, flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 auto" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.2)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 16,
            }}>
              01 / 05
            </span>
            <div className="scanbar" style={{ width: 60, marginBottom: 24 }} />
          </div>

          <div style={{ flex: "1 1 400px" }}>
            <div style={{ marginBottom: 20 }}>
              <span className="pill pill-lime">
                <span className="dot-pulse dot-lime" />
                A News DAO
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 28,
            }}>
              Decentralized.
              <br />
              <span className="text-gradient-vl">Independent.</span>
              <br />
              Unstoppable.
            </h2>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 560,
            }}>
              Stay tuned for the new News Decentralized Autonomous Organization to power financially independent news media and entertainment. Society needs a free press, and the press needs freedom.
            </p>
          </div>
        </div>
      </section>

      <div className="neon-line" style={{ maxWidth: 1200, margin: "0 auto" }} />

      {/* ── BENTO GRID ── */}
      <section style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 60, display: "flex", alignItems: "center", gap: 20 }}>
          <div className="scanbar" style={{ width: 40 }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}>
            The PressCoin Stack
          </span>
        </div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 16,
        }}>

          {/* Protocol Power — large left */}
          <div
            id="protocol"
            className="glass glass-hover"
            style={{
              gridColumn: "1 / 8",
              gridRow: "1 / 2",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 250,
              height: 250,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ marginBottom: 20 }}>
              <span className="pill pill-cyan">
                <span className="dot-pulse dot-cyan" />
                02 / Protocol Power
              </span>
            </div>
            <h3 style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              color: "#f0f0f0",
            }}>
              Like HTTP.<br />
              <span className="text-gradient-cv">But for News.</span>
            </h3>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.5)",
              maxWidth: 480,
            }}>
              PressCoin 2.0 is a real protocol, similar to HTTP and TCP/IP. While the initial choice of blockchain will likely remain Ethereum, PressCoin embraces a web2.5 approach to utility across the Internet and across the physical world.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Ethereum", "Web2.5", "Internet-native", "Physical World"].map((tag) => (
                <span key={tag} className="pill pill-white">{tag}</span>
              ))}
            </div>
          </div>

          {/* Platform Power — right top */}
          <div
            id="platform"
            className="glass glass-hover-v"
            style={{
              gridColumn: "8 / 13",
              gridRow: "1 / 2",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
            }}
          >
            <div style={{
              position: "absolute",
              bottom: -60,
              left: -60,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(180,0,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ marginBottom: 16 }}>
              <span className="pill pill-violet">
                <span className="dot-pulse dot-violet" />
                03 / Platform Power
              </span>
            </div>
            <h3 style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: 20,
            }}>
              One Ecosystem.<br />
              <span className="text-gradient-vl">Infinite Content.</span>
            </h3>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.5)",
            }}>
              The PressCoin ecosystem is a seamlessly interconnected set of content-driven community-powered platforms, running on top of a sophisticated FinTech + AI engine. Stay tuned for announcements.
            </p>
          </div>

          {/* People Power — left bottom */}
          <div
            id="people"
            className="glass glass-hover-l"
            style={{
              gridColumn: "1 / 6",
              gridRow: "2 / 3",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
            }}
          >
            <div style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,255,0,0.09) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ marginBottom: 16 }}>
              <span className="pill pill-lime">
                <span className="dot-pulse dot-lime" />
                04 / People Power
              </span>
            </div>
            <h3 style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: 20,
            }}>
              Power back<br />
              <span style={{ color: "var(--lime)" }}>to the people.</span>
            </h3>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.5)",
            }}>
              PressCoin returns power to the people of the Internet, to regain control of a calmer narrative that focuses on real issues and not identity politics, and not supported by a pure profit motive.
            </p>
          </div>

          {/* Stat cards — right bottom */}
          <div style={{
            gridColumn: "6 / 13",
            gridRow: "2 / 3",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}>
            {[
              { num: "100%", label: "Community Owned", color: "var(--cyan)" },
              { num: "0%", label: "Pure Profit Motive", color: "var(--lime)" },
              { num: "Web2.5", label: "Approach", color: "var(--violet)" },
              { num: "∞", label: "Press Freedom", color: "var(--cyan)" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass"
                style={{
                  padding: "28px 24px",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: stat.color,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        padding: "100px 40px",
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div className="glass" style={{
          padding: "80px 60px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>
          {/* Background glow */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(0,245,255,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative" }}>
            <h2 style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4.5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 28,
            }}>
              The Future of News Media is{" "}
              <span className="text-gradient">of the people,<br />by the people, and for the people.</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.6)",
              marginBottom: 48,
            }}>
              Get ready for PressCoin2.0 ☀️🚀
            </p>
            <a href="#token-swap" className="btn-neon">
              Join the Movement
            </a>
          </div>
        </div>
      </section>

      {/* ── TOKEN SWAP / CONTACT ── */}
      <section id="token-swap" style={{ padding: "80px 40px 120px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", flexWrap: "wrap" }}>

          {/* Left: info */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <span className="pill pill-lime">
                <span className="dot-pulse dot-lime" />
                05 / PressCoin 1.0
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}>
              NEWS → <span className="text-gradient-cv">PRESS</span>
              <br />Token Swap
            </h2>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 36,
            }}>
              Reach out below if you have NEWS tokens and need to swap them for the new PRESS tokens. They&apos;re coming soon, so get in touch.
            </p>

            {/* YouTube embed */}
            <div style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              marginBottom: 36,
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/YkrwIll9T2Y"
                title="PressCoin — Token Swap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Process steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { step: "01", label: "Fill out the form", desc: "Tell us your wallet and token amount" },
                { step: "02", label: "We reach out", desc: "Our team will contact you directly" },
                { step: "03", label: "Complete the swap", desc: "Exchange NEWS for PRESS tokens" },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "var(--cyan)",
                    opacity: 0.7,
                    marginTop: 3,
                    minWidth: 28,
                  }}>
                    {item.step}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      letterSpacing: "0.05em",
                      color: "#f0f0f0",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.35)",
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass" style={{ padding: "48px 40px" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 8,
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Satoshi Nakamoto"
                  autoComplete="name"
                />
              </div>

              <div>
                <label style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 8,
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 8,
                }}>
                  Wallet Address
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="0x..."
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>

              <div>
                <label style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 8,
                }}>
                  Message
                </label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="How many NEWS tokens do you hold? Any other details..."
                />
              </div>

              <button type="submit" className="btn-neon" style={{ marginTop: 8, width: "100%", textAlign: "center" }}>
                Submit Token Swap Request
              </button>

              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.2)",
                textAlign: "center",
                letterSpacing: "0.05em",
              }}>
                We will be in touch with ways to get involved. Prepare for the new news!
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 40px",
        background: "rgba(255,255,255,0.015)",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="PressCoin logo"
              style={{ width: 28, height: 28, objectFit: "contain" }}
            />
            <span style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
            }}>
              PRESS<span className="text-gradient-cv">COIN</span>
            </span>
            <span className="pill pill-cyan" style={{ fontSize: "0.55rem" }}>2.0</span>
          </div>

          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
          }}>
            We will be in touch with ways to get involved. Prepare for the new news!
          </p>

          <div style={{ display: "flex", gap: 24 }}>
            {["Protocol", "Platform", "People", "DAO"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="neon-line" style={{ maxWidth: 1200, margin: "32px auto 0" }} />

        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.12)",
          textAlign: "center",
          marginTop: 24,
          textTransform: "uppercase",
        }}>
          © 2025 PressCoin 2.0 &nbsp;·&nbsp; The Future of News Media
        </p>
      </footer>
    </main>
  );
}
