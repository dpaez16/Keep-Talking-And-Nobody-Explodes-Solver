import Password from '../types/password';

export default class PasswordsSolver {
    static solve(prefix) {
        const regex = new RegExp(prefix.toUpperCase() + ".*");
        return Password.enumKeys.filter(password => regex.test(password));
    }
};