package com.com.swmedia.profile;

import android.database.Observable;

import com.com.swmedia.login.LoginResponse;

import java.util.Map;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.HTTP;
import retrofit2.http.HeaderMap;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface Api_JSON_Profile {
    @POST("/api/auth/getUserProfile")
    Call<ProfileResponse> getProfileInfo(@HeaderMap Map<String, String> headers, @Body LoginResponse user);
    @POST("/api/auth/updateUser")
    Call<ProfileResponse> update(@HeaderMap Map<String, String> headers, @Body ProfileResponse user);
}
