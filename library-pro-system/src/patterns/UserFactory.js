import { Student, Teacher } from '../models/User.js';

/**
 * UserFactory implements the Factory Design Pattern.
 * It encapsulates the instantiation logic for different User types.
 */
export class UserFactory {
    /**
     * @param {string} type - 'student' or 'teacher'
     * @param {string} name 
     * @param {string} id 
     * @returns {User}
     */
    static createUser(type, name, id) {
        const userType = type.toLowerCase();
        
        switch (userType) {
            case 'student':
                return new Student(name, id);
            case 'teacher':
                return new Teacher(name, id);
            default:
                throw new Error(`UserFactory Error: Type "${type}" is not recognized.`);
        }
    }
}
