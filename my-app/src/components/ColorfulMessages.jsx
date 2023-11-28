export const ColorfulMessages = ({ color, children }) => {
    const contentStyle = {
        color,
        fontSize: "18px",
    };

    return <p style={contentStyle}>{children}</p>;
};