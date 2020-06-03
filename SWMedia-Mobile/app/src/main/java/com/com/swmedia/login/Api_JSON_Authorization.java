package com.com.swmedia.login;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface Api_JSON_Authorization {
    @POST("/api/auth/loginUser")
    Call<LoginResponse> login(@Body LoginResponse loginResponse);
}
