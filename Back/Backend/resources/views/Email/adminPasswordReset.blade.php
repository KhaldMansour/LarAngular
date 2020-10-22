@component('mail::message')
# Admin Change Password Request

The body of your message.

@component('mail::button', ['url' => 'http://localhost:4200/admin/response-password?token='. $token ])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
