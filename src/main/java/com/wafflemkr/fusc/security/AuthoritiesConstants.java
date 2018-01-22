package com.wafflemkr.fusc.security;

/**
 * Constants for Spring Security authorities.
 */
public final class AuthoritiesConstants {

    public static final String ADMIN = "ROLE_ADMIN";

    public static final String USER = "ROLE_USER";

    public static final String ANONYMOUS = "ROLE_ANONYMOUS";

    public static final String COACH = "ROLE_COACH";

    public static final String ASSISTANT_COACH = "ROLE_ASSISTANT_COACH";

    public static final String MANAGER = "ROLE_MANAGER";

    public static final String REFEREE = "ROLE_REFEREE";

    public static final String REFEREE_DIRECTOR = "ROLE_REFEREE_DIRECTOR";

    public static final String TOURNAMENT_DIRECTOR = "ROLE_TOURNAMENT_DIRECTOR";

    public static final String VOLUNTEER = "ROLE_VOLUNTEER";

    public static final String VOLUNTEER_DIRECTOR = "ROLE_VOLUNTEER_DIRECTOR";

    public static final String CLINIC_DIRECTOR = "ROLE_CLINIC_DIRECTOR";

    private AuthoritiesConstants() {
    }
}
