
/* particle.js - Constellation Effect Configuration */
/* Adapted from user provided React config for Vanilla JS */

const particlesConfig = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                links: {
                    opacity: 0.5,
                },
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 150,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};

// Initialize tsParticles
// Make sure to include the tsparticles script in HTML before this
// <script src="https://cdn.jsdelivr.net/npm/tsparticles@2.12.0/tsparticles.bundle.min.js"></script>

document.addEventListener('DOMContentLoaded', async () => {
    await tsParticles.load("tsparticles", particlesConfig);
});
