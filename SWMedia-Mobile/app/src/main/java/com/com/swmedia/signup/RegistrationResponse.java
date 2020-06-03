package com.com.swmedia.signup;

import com.google.gson.annotations.SerializedName;

public class RegistrationResponse {
    @SerializedName("username")
    private String fullName;
    @SerializedName("email")
    private String email;
    @SerializedName("password")
    private String password;
    @SerializedName("phone")
    private String phone;
    @SerializedName("selfDescription")
    private String selfDescription;
    @SerializedName("dateOfBirth")
    private String dateOfBirth;
    @SerializedName("Country")
    private String Country;
    @SerializedName("City")
    private String City;
    @SerializedName("accessToken")
    private String accessToken;

    public RegistrationResponse(String userName, String email, String password, String phone){
        this.fullName = userName;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
