package com.com.swmedia.signup;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface Api_JSON_Registration {
    @POST("/api/auth/registerUser")
    Call<RegistrationResponse> register(@Body RegistrationResponse registrationResponse);
}
