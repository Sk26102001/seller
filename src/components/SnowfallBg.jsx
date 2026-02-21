'use client';

const { default: Snowfall } = require("react-snowfall");

function SnowfallBg() {
    return (
        <div style={{ height: '100vh', width: '100%', background: 'transparent', position: 'fixed', top: 0, zIndex: 0 }}>
            <Snowfall snowflakeCount={150} wind={[-0.5, 2]} color="#00bcd490" />
        </div>
    )
}

export default SnowfallBg
