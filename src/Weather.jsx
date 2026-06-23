
import React from 'react';

function Weather({ temperature }) {

    // Function that determines the weather message based on temperature
    const getWeatherMessage = () => {
        if (temperature < 20) {
            return "طقس بارد / Cold Weather";
        } else if (temperature >= 20 && temperature <= 40) {
            return "طقس عادي / Normal Weather";
        } else {
            return "طقس حار جداً / Hot Weather";
        }
    };

    // Get the appropriate CSS class for styling
    const getWeatherStyle = () => {
        if (temperature < 20) {
            return weatherStyles.cold;
        } else if (temperature >= 20 && temperature <= 40) {
            return weatherStyles.normal;
        } else {
            return weatherStyles.hot;
        }
    };

    return (
        <div style={{ ...weatherStyles.card, ...getWeatherStyle() }}>
            <div style={weatherStyles.temperatureDisplay}>
                <h2>🌡️ {temperature}°C</h2>
            </div>

            <div style={weatherStyles.weatherMessage}>
                <p>{getWeatherMessage()}</p>
            </div>

            {/* Alternative method: Using AND Operator for Conditional Rendering */}
            <div style={weatherStyles.weatherDescription}>
                {temperature < 20 && <p>❄️ البسوا ملابس دافئة! / Bundle up! It's chilly outside.</p>}
                {temperature >= 20 && temperature <= 40 && <p>☀️ طقس لطيف جداً! / Pleasant weather for outdoor activities.</p>}
                {temperature > 40 && <p>🔥 اشربوا الماء! / Stay hydrated! It's very hot.</p>}
            </div>
        </div>
    );
}

const weatherStyles = {
    card: {
        borderRadius: '12px',
        padding: '25px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        color: 'white'
    },
    cold: {
        background: 'linear-gradient(135deg, #667eea 0%, #4a90e2 100%)'
    },
    normal: {
        background: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)'
    },
    hot: {
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    temperatureDisplay: {
        marginBottom: '15px'
    },
    weatherMessage: {
        background: 'rgba(255, 255, 255, 0.2)',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '15px'
    },
    weatherDescription: {
        fontSize: '0.95rem',
        opacity: 0.95
    }
};

export default Weather;
