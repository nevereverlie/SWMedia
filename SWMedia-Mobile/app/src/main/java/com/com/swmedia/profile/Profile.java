package com.com.swmedia.profile;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.com.swmedia.R;
import com.com.swmedia.login.LoginResponse;
import com.com.swmedia.login.MainActivity;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Profile extends AppCompatActivity {
    private static final String BASE_URL = "https://swmedia.azurewebsites.net";

    LinearLayout linearLayout;
    LinearLayout linearLayout2;

    private String accessToken;
    private String name;
    private String nameProfile;
    private String desctiptionProfile;
    private String password;
    private String emailProfile;
    private String phoneProfile;
    private String passwordProfile;
    private String dbProfile;
    private String countryProfile;
    private String cityProfile;

    public String getDesctiptionProfile() {
        return desctiptionProfile;
    }

    public void setDesctiptionProfile(String desctiptionProfile) {
        this.desctiptionProfile = desctiptionProfile;
    }

    public String getNameProfile() {
        return nameProfile;
    }

    public void setNameProfile(String nameProfile) {
        this.nameProfile = nameProfile;
    }

    public String getEmailProfile() {
        return emailProfile;
    }

    public void setEmailProfile(String emailProfile) {
        this.emailProfile = emailProfile;
    }

    public String getPhoneProfile() {
        return phoneProfile;
    }

    public void setPhoneProfile(String phoneProfile) {
        this.phoneProfile = phoneProfile;
    }

    public String getPasswordProfile() {
        return passwordProfile;
    }

    public void setPasswordProfile(String passwordProfile) {
        this.passwordProfile = passwordProfile;
    }

    public String getDbProfile() {
        return dbProfile;
    }

    public void setDbProfile(String dbProfile) {
        this.dbProfile = dbProfile;
    }

    public String getCountryProfile() {
        return countryProfile;
    }

    public void setCountryProfile(String countryProfile) {
        this.countryProfile = countryProfile;
    }

    public String getCityProfile() {
        return cityProfile;
    }

    public void setCityProfile(String cityProfile) {
        this.cityProfile = cityProfile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        setAccessToken(getIntent().getStringExtra("accessToken"));
        setName(getIntent().getStringExtra("name"));
        setPassword(getIntent().getStringExtra("password"));

        linearLayout = findViewById(R.id.linearLayout);
        linearLayout2 = findViewById(R.id.linearLayout2);

        ImageView btnEdit = findViewById(R.id.btnEdit);
        ImageView btnAccept = findViewById(R.id.btnAccept);
        ImageView btnLogout = findViewById(R.id.logout);

        TextView username = findViewById(R.id.usernameText);
        TextView password = findViewById(R.id.passwordText);
        TextView email = findViewById(R.id.emailText);
        TextView phone = findViewById(R.id.phoneText);
        TextView description = findViewById(R.id.descriptionText);
        TextView birthday = findViewById(R.id.birthdayText);
        TextView country = findViewById(R.id.countryText);
        TextView city = findViewById(R.id.cityText);

        EditText usernameEdit = findViewById(R.id.usernameEdit);
        EditText passwordEdit = findViewById(R.id.passwordEdit);
        EditText emailEdit = findViewById(R.id.emailEdit);
        EditText phoneEdit = findViewById(R.id.numberEdit);
        EditText descriptionEdit = findViewById(R.id.descriptionEdit);
        EditText birthdayEdit = findViewById(R.id.birthdayEdit);
        EditText countryEdit = findViewById(R.id.countyEdit);
        EditText cityEdit = findViewById(R.id.cityEdit);
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        final Api_JSON_Profile api_json_profile = retrofit.create(Api_JSON_Profile.class);
        final HashMap<String, String> headerMap = new HashMap<String, String>();

        LoginResponse loginResponse = new LoginResponse(getName(), getPassword());
        headerMap.put("Content-type", "application/json");
        headerMap.put("Authorization", "Bearer " + getAccessToken());
        Call<ProfileResponse> call = api_json_profile.getProfileInfo(headerMap, loginResponse);
        call.enqueue(new Callback<ProfileResponse>() {
            @Override
            public void onResponse(Call<ProfileResponse> call, Response<ProfileResponse> response) {
                if(response.body() != null){
                    username.setText("UserName: "+response.body().getFullName());
                    password.setText("Password: **********");
                    email.setText("Email: "+response.body().getEmail());
                    phone.setText("Phone: "+response.body().getPhone());
                    description.setText("Description: "+response.body().getSelfDescription());
                    birthday.setText("Date of birth: "+response.body().getDateOfBirth());
                    country.setText("Country: "+response.body().getCountry());
                    city.setText("City: "+response.body().getCity());

                    setNameProfile(response.body().getFullName());
                    setPasswordProfile(response.body().getPassword());
                    setEmailProfile(response.body().getEmail());
                    setPhoneProfile(response.body().getPhone());
                    setDesctiptionProfile(response.body().getSelfDescription());
                    setDbProfile(response.body().getDateOfBirth());
                    setCountryProfile(response.body().getCountry());
                    setCityProfile(response.body().getCity());
                }
            }

            @Override
            public void onFailure(Call<ProfileResponse> call, Throwable t) {
                Toast.makeText(Profile.this, "Can\\'t connect to the server. Please check your Internet connection!", Toast.LENGTH_LONG).show();

            }
        });

        btnEdit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
              edit();
                usernameEdit.setText(getName());
                passwordEdit.setText(getPassword());
                emailEdit.setText(getEmailProfile());
                phoneEdit.setText(getPhoneProfile());
                descriptionEdit.setText(getDesctiptionProfile());
                birthdayEdit.setText(getDbProfile());
                countryEdit.setText(getCountryProfile());
                cityEdit.setText(getCityProfile());
            }
        });

        btnAccept.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String userNameChange = usernameEdit.getText().toString();
                if(userNameChange.equals("")){
                    userNameChange = "no data";
                }
                String passwordChange = passwordEdit.getText().toString();
                if(passwordChange.equals("")){
                    passwordChange = "no data";
                }
                String emailChange = emailEdit.getText().toString();
                if(emailChange.equals("")){
                    emailChange = "no data";
                }
                String phoneChange = phoneEdit.getText().toString();
                if(phoneChange == ""){
                    phoneChange = "no data";
                }
                String descriptionChange = descriptionEdit.getText().toString();
                if(descriptionChange == ""){
                    descriptionChange = "no data";
                }
                String birthdayChange = "0001-01-01T00:00:00";
                if(birthdayChange.equals("")){
                    birthdayChange = "no data";
                }
                String countryChange = countryEdit.getText().toString();
                if(countryChange.equals("")){
                    countryChange = "no data";
                }
                String cityChange = cityEdit.getText().toString();
                if(cityChange.equals("")){
                    cityChange = "no data";
                }
                ProfileResponse profileResponse = new ProfileResponse(userNameChange,emailChange, passwordChange,
                        phoneChange, descriptionChange, birthdayChange, countryChange, cityChange);
                edit();

                Retrofit retrofit = new Retrofit.Builder()
                        .baseUrl(BASE_URL)
                        .addConverterFactory(GsonConverterFactory.create())
                        .build();

                final Api_JSON_Profile api_json_profile = retrofit.create(Api_JSON_Profile.class);
                final HashMap<String, String> headerMap = new HashMap<String, String>();

                headerMap.put("Content-type", "application/json");
                headerMap.put("Authorization", "Bearer " + getAccessToken());

                Call<ProfileResponse> call = api_json_profile.update(headerMap, profileResponse);
                String finalUserNameChange = userNameChange;
                String finalPasswordChange = passwordChange;
                String finalEmailChange = emailChange;
                String finalPhoneChange = phoneChange;
                String finalDescriptionChange = descriptionChange;
                String finalBirthdayChange = birthdayChange;
                String finalCountryChange = countryChange;
                String finalCityChange = cityChange;
                call.enqueue(new Callback<ProfileResponse>() {
                    @Override
                    public void onResponse(Call<ProfileResponse> call, Response<ProfileResponse> response) {
                        if(response.body() != null){
                            Toast.makeText(Profile.this, "Your profile was successfully updated!", Toast.LENGTH_LONG).show();
                            username.setText("UserName: "+finalUserNameChange);
                            password.setText("Password: **********");
                            email.setText("Email: "+finalEmailChange);
                            phone.setText("Phone: "+finalPhoneChange);
                            description.setText("Description: "+finalDescriptionChange);
                            birthday.setText("Date of birth: "+finalBirthdayChange);
                            country.setText("Country: "+finalCountryChange);
                            city.setText("City: "+finalCityChange);
                        }
                    }

                    @Override
                    public void onFailure(Call<ProfileResponse> call, Throwable t) {
                        Toast.makeText(Profile.this, "Can\\'t connect to the server. Please check your Internet connection!", Toast.LENGTH_LONG).show();

                    }
                });
            }
        });

        btnLogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
    }

    private void edit(){
        if(linearLayout.getVisibility() == View.VISIBLE){
            linearLayout.setVisibility(View.INVISIBLE);
            linearLayout2.setVisibility(View.VISIBLE);
        } else {
            linearLayout.setVisibility(View.VISIBLE);
            linearLayout2.setVisibility(View.INVISIBLE);
        }
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
