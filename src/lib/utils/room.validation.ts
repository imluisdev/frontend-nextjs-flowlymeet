export const isValidRoomId = (id: string): boolean => {
    return /^[a-z]+-[a-z]+$/.test(id);
};