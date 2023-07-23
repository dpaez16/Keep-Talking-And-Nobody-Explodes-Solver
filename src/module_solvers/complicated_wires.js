import WireColor from '../types/wire_color';

export default class ComplicatedWiresSolver {
    static solve(wire_colors, has_star, led_is_on, last_digit_of_serial_number, has_parallel_port, num_batteries) {
        const wire_has_red_color = wire_colors.includes(WireColor.RED);
        const wire_has_blue_color = wire_colors.includes(WireColor.BLUE);
        const even_serial_number_digit = last_digit_of_serial_number % 2 === 0;
        
        if (wire_has_red_color && wire_has_blue_color && has_star) {
            if (led_is_on) return false;
            else return has_parallel_port;
        }

        if (wire_has_red_color && wire_has_blue_color && !has_star) {
            return even_serial_number_digit;
        }

        if (wire_has_red_color && !wire_has_blue_color && has_star) {
            if (led_is_on) return num_batteries >= 2;
            else return true;
        }
        
        if (wire_has_red_color && !wire_has_blue_color && !has_star) {
            if (led_is_on) return num_batteries >= 2;
            else return even_serial_number_digit;
        }
        
        if (!wire_has_red_color && wire_has_blue_color && has_star) {
            if (led_is_on) return has_parallel_port;
            else return false;
        }
        
        if (!wire_has_red_color && wire_has_blue_color && !has_star) {
            if (led_is_on) return has_parallel_port;
            else return even_serial_number_digit;
        }
        
        if (!wire_has_red_color && !wire_has_blue_color && has_star) {
            if (led_is_on) return num_batteries >= 2;
            else return true;
        }

        if (!wire_has_red_color && !wire_has_blue_color && !has_star) {
            if (led_is_on) return false;
            else return true;
        }

        return undefined;
    }
};