package com.com.swmedia.login;

import com.google.gson.annotations.SerializedName;

public class LoginResponse {
    @SerializedName("username")
    private String username;
    @SerializedName("token")
    private String accessToken;
    @SerializedName("password")
    private String password;


    public LoginResponse(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
