export const dateFormat = (date) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
    };
    return new Date(date).toLocaleDateString("es-ES", options);
}