package com.com.swmedia.login;

import android.app.Dialog;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.com.swmedia.profile.Profile;
import com.com.swmedia.R;
import com.com.swmedia.signup.SignUp;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {
    private static final String BASE_URL = "https://swmedia.azurewebsites.net";

    private EditText mUserName;
    private EditText mPassword;
    private String accessToken;
    private Dialog loadingDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView btnSignUp = findViewById(R.id.btnSignUp);
        Button btnLogin = findViewById(R.id.btnLogin);

        mUserName = findViewById(R.id.usernameLogin);
        mPassword = findViewById(R.id.passwordLogin);
        loadingDialog = new Dialog(this);
        loadingDialog.setContentView(R.layout.loading);
        loadingDialog.getWindow().setBackgroundDrawable(getDrawable(R.drawable.btn_background));
        loadingDialog.getWindow().setLayout(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        loadingDialog.setCancelable(false);

        btnSignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, SignUp.class);
                startActivity(intent);
            }
        });

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String userName = mUserName.getText().toString();
                String password = mPassword.getText().toString();
                loadingDialog.show();
                if (null == userName || userName.length() == 0) {
                    mUserName.setError("UserName is required");
                } else if (null == password || password.length() == 0) {
                    mPassword.setError("Password is required");
                } else {
                    LoginResponse loginResponse = new LoginResponse(userName, password);
                    Retrofit retrofit = new Retrofit.Builder()
                            .baseUrl(BASE_URL)
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();
                    Api_JSON_Authorization api_json_authorization = retrofit.create(Api_JSON_Authorization.class);
                    Call<LoginResponse> call = api_json_authorization.login(loginResponse);
                    call.enqueue(new Callback<LoginResponse>() {
                        @Override
                        public void onResponse(Call<LoginResponse> call, Response<LoginResponse> response) {
                            try {
                                if (response.body() != null) {
                                    String rerspo = response.body().toString();
                                    setAccessToken(response.body().getAccessToken());
                                    Intent intent = new Intent(MainActivity.this, Profile.class);
                                    intent.putExtra("accessToken", getAccessToken());
                                    intent.putExtra("name", userName);
                                    intent.putExtra("password", password);
                                    loadingDialog.dismiss();
                                    startActivity(intent);
                                }
                            } catch (Exception e) {
                                loadingDialog.dismiss();
                                if (response.code() == 401 || response.code() == 404) {
                                    Toast.makeText(MainActivity.this, "Wrong login or password!"
                                            , Toast.LENGTH_LONG).show();
                                }
                            } finally {
                                loadingDialog.dismiss();

                            }
                        }

                        @Override
                        public void onFailure(Call<LoginResponse> call, Throwable t) {
                            Toast.makeText(MainActivity.this, "Can\\'t connect to the server. Please check your Internet connection!", Toast.LENGTH_LONG).show();
                            loadingDialog.dismiss();

                        }
                    });



                }
            }
        });
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
