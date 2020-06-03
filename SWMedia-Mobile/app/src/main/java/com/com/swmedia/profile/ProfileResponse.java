package com.com.swmedia.profile;

import com.google.gson.annotations.SerializedName;

public class ProfileResponse {
    @SerializedName("userId")
    private int userId;
    @SerializedName("username")
    private String fullName;
    @SerializedName("email")
    private String email;
    @SerializedName("password")
    private String password;
    @SerializedName("passwordHash")
    private String passwordHash;
    @SerializedName("phone")
    private String phone;
    @SerializedName("selfDescription")
    private String selfDescription;
    @SerializedName("dateOfBirth")
    private String dateOfBirth;
    @SerializedName("country")
    private String Country;
    @SerializedName("city")
    private String City;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public ProfileResponse(String fullName, String email, String password, String phone, String selfDescription, String dateOfBirth, String country, String city) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.selfDescription = selfDescription;
        this.dateOfBirth = dateOfBirth;
        this.Country = country;
        this.City = city;
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

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSelfDescription() {
        return selfDescription;
    }

    public void setSelfDescription(String selfDescription) {
        this.selfDescription = selfDescription;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }
}
