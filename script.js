// anwar.es — interactions and CV request form

// =====================================================================
// CONFIG — replace WEB3FORMS_KEY to receive form submissions by email
//   1) Sign up free at https://web3forms.com (only your email, no card)
//   2) Paste your access key below
//   While left as 'YOUR_WEB3FORMS_ACCESS_KEY' the form still works as a
//   gate (captcha + honeypot) and unlocks the download, but does NOT
//   email submissions to you.
// =====================================================================
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
const CV_FILENAME  = 'AnwarYahyaCV.pdf';

// CV PDF embedded as base64 (generated from CV 2026)
const CV_PDF_B64 = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUiAvRjMgNCAwIFIgL0Y0IDUgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMSAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL0Jhc2VGb250IC9UaW1lcy1Cb2xkIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GMiAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0Jhc2VGb250IC9UaW1lcy1Sb21hbiAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyAvTmFtZSAvRjMgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250Cj4+CmVuZG9iago1IDAgb2JqCjw8Ci9CYXNlRm9udCAvVGltZXMtSXRhbGljIC9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nIC9OYW1lIC9GNCAvU3VidHlwZSAvVHlwZTEgL1R5cGUgL0ZvbnQKPj4KZW5kb2JqCjYgMCBvYmoKPDwKL0NvbnRlbnRzIDExIDAgUiAvTWVkaWFCb3ggWyAwIDAgNTk1LjI3NTYgODQxLjg4OTggXSAvUGFyZW50IDEwIDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9Db250ZW50cyAxMiAwIFIgL01lZGlhQm94IFsgMCAwIDU5NS4yNzU2IDg0MS44ODk4IF0gL1BhcmVudCAxMCAwIFIgL1Jlc291cmNlcyA8PAovRm9udCAxIDAgUiAvUHJvY1NldCBbIC9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUkgXQo+PiAvUm90YXRlIDAgL1RyYW5zIDw8Cgo+PiAKICAvVHlwZSAvUGFnZQo+PgplbmRvYmoKOCAwIG9iago8PAovUGFnZU1vZGUgL1VzZU5vbmUgL1BhZ2VzIDEwIDAgUiAvVHlwZSAvQ2F0YWxvZwo+PgplbmRvYmoKOSAwIG9iago8PAovQXV0aG9yIChBbndhciBBaG1lZCBNYWhhbmFuIFlhaHlhKSAvQ3JlYXRpb25EYXRlIChEOjIwMjYwNTE2MTIxMTUwKzAwJzAwJykgL0NyZWF0b3IgKFwodW5zcGVjaWZpZWRcKSkgL0tleXdvcmRzICgpIC9Nb2REYXRlIChEOjIwMjYwNTE2MTIxMTUwKzAwJzAwJykgL1Byb2R1Y2VyIChSZXBvcnRMYWIgUERGIExpYnJhcnkgLSBcKG9wZW5zb3VyY2VcKSkgCiAgL1N1YmplY3QgKFwodW5zcGVjaWZpZWRcKSkgL1RpdGxlIChBbndhciBBaG1lZCBNYWhhbmFuIFlhaHlhIFwyMDQgQ1YgMjAyNikgL1RyYXBwZWQgL0ZhbHNlCj4+CmVuZG9iagoxMCAwIG9iago8PAovQ291bnQgMiAvS2lkcyBbIDYgMCBSIDcgMCBSIF0gL1R5cGUgL1BhZ2VzCj4+CmVuZG9iagoxMSAwIG9iago8PAovRmlsdGVyIFsgL0FTQ0lJODVEZWNvZGUgL0ZsYXRlRGVjb2RlIF0gL0xlbmd0aCAzMjM3Cj4+CnN0cmVhbQpHYXVgVT8kRyFuJnEvKjBrYmZ1YiJeLkgnbyFHXV4tZExBc0BuOEByTmFMTDwiJEk2MltPJy8lQjdLajlDJ2JHMGZdNV9CVDpGcEFQLkldMzxTYjc6RWdWaTlOcWpWaSkqOG5GVUdJWmMvZlRoPGonK1xkP0VpO1VoMSs5QWVYXSE+ZnJpcU09VnFALyhZVEBqX2UlUy1mJkxzVl8tJkdWWi9IQildJChLKUpmUyU/WitGJmBEMjVWYjlOV1ApSXVBMkhvXWBaKmF0QkdiOypYP1A1R0NyJzZtKChOOkgmK3VDTWM5OUNPWDE5Pm8naT1SUkxHOFw3Q0VVNC1vNC1EUmc4UUdRSGhlKGR1Qkc0Q0FWaS9cKGVocS5raFcwazNjN0opdTA9clFGZThnWzI1UmJsW2g5KzVPL0lFb1hzZGBfU1NQTEpMIlklXW1KNjUmZTtlak01MEMxUlYla0QnUyhwXUdKJSEqbmJlODcyQVo/clM1VDkuQSM8c145dXU3UUZtLiZhbCc9Y18oaidpT25rIW5sJ0lUSUdeZTFNbUo0W0k6PWZqKVJvak85XmNlPGpoLzdbZVFeSkBfayckZzdnW1hiWkFWNWM9ImRVKTM2J207Nj0nTWVFWkRkZytCYU88MXJnL25VZjFGIWllbycyQllaW2NBcCIpYiFLSDRqKV4qQlxtQS1lLj5BWzElVlw3YVFeJXFQXnNOX1M2LSYuLzU2QiZjOVIrKVVjLDUocVdxazlVYDIrNTImXStfKmE5LzRbRHFjWj5NMjREMSFDaidzZVk9bi9oO0hGMy0rYmE8MVghUDxMMTJFImdnXCtdRFFYbiZkYmVhbWZzO25xJjpFa0cwIkFdJHMlcEBXKjlsTG4zPlxeMUxwPGIzQXRyWnNebXBHTFQyNStBQkEoL01IYV5iUyNYanReUmFgMWwsPWBEclBTbXBGbkBwM3BZZUApWU88Q1NfRU1oV0thRG0kbCcoRyk4by5OP09NPVNYTzB0YkxLazw4PCZuTDJIZjlKRFZHRGpwdDNDUlJQMzxYKElDY2RrJXBqRFBYVy5EWVE6T1JmNGxZJGstTEttamVDYjw9Z2RvaGliTDojRzZmUy45NmwtRTAzJVRZY2BqTU0vckpIPGcpZDNHVGJpI2VyczJCQ2ZSUTlyJVEyUlEqaDA+XCQ2SmtMUSlVYUFGKEVWZFVrZSJTO2Y3OC45WEtoKiVbWHEmWiwkJSVqMCxzVmRYM01bOHEvZHMmNVpwIVEzQGBxMFtDLT9DcEtJMEl1OmFEMSJUcFM7RGpiYzYrYk1zODUpL05HWClxI2lyNDMzP1xTLzhSQy09PT9kY0dxYzkuQEAyXjAiMjRHLUxNMSxscjY4c2hFJm5MUi9WISFgW1wvOkdqPS5XXydGNEA7ZHUiImlwWSdIL1xJYklDU3A5bS8hcVIxbjVSYHQhKzclZWhadCw7OD9lPSJXQjdrVUZpXjNQMUB0SlctL1YkL0ssWmAyT3FYMEgoPzxXKiJwZEJzJGkrRUdJM1hbJFtRKSQlUilZXGI9YjRTUDBsQjNqNzZmSD0mUTUzL0FxU1YoXkNGSUs8KDhdWkM/Yz1vO0BiUF0kb2ZxJG4haW1GVV86Qkckb08yKVw7ZVB1J04rW24pPUFEQGdePStCSW1obi0wSS1wOmFeU0p1W0hUJiwvLVBrPz5mVEtuI2dSbDVlRFs7I3BDZVx0WkhVRC0lMi5gJipfVCJbZlJEWzshU2hnWUBWXlphJEdsRSdUQmRUKVVfdFRyYDQtSXElXldCUzpZR2ZeJ2xTaGorLWsjMSFDOmt0RGVTTiVQRHRMISIvTFc/YUNEamBJKDRMQ1BKXV5eXmhbPjFlQ2RIbkspME40K0tPWzslIyIrdVRSMCxyb05xR21IWDMuWS9bTFphKXJhOj9IWyZPPVcxTz8kMmxuLCVkOV05TUtOX01YcC9daCk5R1AjLXVwb3JHVmBgSV5lbyo7PlFoIi0lbmVUWzhQQlk6WTlzPG1tUD1EP102SGg8V1ZtSmBgOD1WSVZxQGljQkVeZTBEU3QwLVNIVzNLYDZgdVZbLi1oLGBOKSZHK1lYUE42dEc2KGcyPEJXJEQ3R1AlP0hscy5HaFNySSlCUUU8Lzc4JEsoQ1ZjUVE1S20sLFU9VUpyZl5ULDROJzE1LCtaSW4uZHNTWktyLWxaM0lSOW00IVwuIiVkSTk0PDcvUydHLmRgZGh0WilzT2g0VTYwY1RHJy9ZUW48aDtNK1hRNFNjaCQvQWFuYmVxbER1b11AISVFajJucl9vRFUqVi1QTVJIZTNnVEJkayVHaSFsK0NLSSVoUWssYlZLPk9aOlw8VVJXRnFhO0o/bGRsR1xSMDdgOVVycyp0Z1FcbT5pSj8yTjA1RldOSChNdFFUMF5AXzU5LT9QTlRWM1pUcHFIaStKW19RTm5CQkFdLWkmMWVwM2FsXjFfInRIL1NeIkwkZWFZZkNwP09saGdIRmtzTWVVNjxsPFkjOThQOHJPSmxuJjtJNCNHSDo2MkAzVVReYjZUYzk0NyYyUVk2XmpQTGM4MG1gOGI7TkwxaCZnKCIwaT9bWlw+YGZYRFZMX3QuJ1EwJGBCalFtREhyNFJWKGozdFZdVCdDSCcvTS46b1BFUCpBVzdkYG4pJWBVUkw/L18mLSpdM0VfV0JaKSRsSkdZR0dVMGsiLnNiOWxPXFQ1PSooLTxeITJcQTVpTk4rcUo1WSkxUj5GM1hma0ZvP2BuaCwqNVdaLyZDbE5ySzdOLCdlU0FiXFEiRCxdTyVlIW1XJiwsX1xlYyxsVVAwaCk8UHQ1SWlgKEMtSTklVWtxN2MkTTZ1IT0yZGkqPEFyVzdCZTwzNiskbWUsQmprU1g1NV0oWGAzMWVBYlUuUGRHL0VEaydDMC0wRjkpciFjRXRBbSk7LTo0WlhWJk8jVShzI0ROVHJZQWN0ZzI4T3M6NkZvX01aXCxBZWs+OyIoRC9gQW9zLHBEZCtWIXFMIWA5M1g2VnI/UiY1YlNeTWZ0YExeRiI0Nk4kWTFyb0BIYnVFSSRAUSVebl4wRy1QOkBALyRjLyI9OmhXUHIyRFtYY1c4OCZaOVwmZSFqXDVPM1k7UEJVXXNMJzY0TThLN2QoQiFbLCQhWDlLVHVLTDhDK180M1dTIWlTKEpzJV9yS08kKiJqTE1iTUZVQVd0cTs3UjJaKkFvVU5yZFVeSCRXZidhMiFrMWVbbFpxJ01jVzgoXjdQQTNDWEpFWEs6cSR1KFJWWF5AblVzS1ZoZz5LdW5IZVhoOGsidU8hVnJHMGJNI04mQnFXK0ZBJGQpQSJnJzBCIUQrSltHIj0wM3FwIm9UJTZbNkRLPyxMLihrTmVfLlBabmBLPl1kVUdHS3A0OkM4PDkia1E6bXIzZiVtMWc6UHMvJ15VcFdZWyYtZWEhaEhuNVFXPDVCNyQvY0pDSlZAbzJQXkxxN0U3KkJyQGwyOWwldV9Ecz5bUSNEQylOVUs3RD9wYmosKGImWFBKMHJPJ0YtbykxMSxIdWdqPklsZTwqKk5FN2pSYGw6bmdlQEUzNG9EayhAYShtR2xYPj1aMUg3bVs2LWhiPyVVMWJRIjsoJkBYVVpdMlBbaT8ybW9pQzdjLmZQLV90UzI7XmElSVJgZSxNY0s0YlowSEgpalJCNCw8QDwjQTYvdS5fZHJtNi02ZyYiTDVVNylYW2xEWFpiPXRARjU7RV82RW1ONDA3Kk4vIT1lMkw5Oj4yVURKWz5KPiw/aG5zbEw3KSgtIjxxTSNuK2dSOy10cypKbGZOJDFrJSo+N1MnWmEuYD8+YTh0S0dLb0stcXVoTElKPCxSJmExXXEkJnM7VV9WbGsrbmE6WTRYRVk1Mi45TE5McDFmIVBOJD5xV1hkZzYzbUo+UGg6ZDVmZkJkIW5LXkQ9NmtEMU5RO0MiSmYydElfVCNrRmQnK19tYkNRc1wzSCRxZUIvK2ZAXllZcSVZW2BUQ2M+P00xPkFKVjFiai9cU1RmI2ZtMEBjVWpsTEBbM2RbMSJIc1EoKUxTOz8qLEtaRFNZVk1odCV0OWM/bVZcbDc9MVc/cTY9cGlYNl9wcGlUaV4qZXIpYVVSZltOYSo3Tl4hbk1mO3Amc1AyYFUqcU8zVlduYzw9OEk3OnRUXyVCTis0ckRHc29XQ15YWyFjY1NmVl9IbWtZa29fbzpyaGVdUm9WQXNkUHJ0O0REJyhIXSZAa0dHbDorbnJrSm8tST5OJkJVQjJNYCFfb1tyJVFfcUQuSkUzMEwxUWE1fj5lbmRzdHJlYW0KZW5kb2JqCjEyIDAgb2JqCjw8Ci9GaWx0ZXIgWyAvQVNDSUk4NURlY29kZSAvRmxhdGVEZWNvZGUgXSAvTGVuZ3RoIDE0MTUKPj4Kc3RyZWFtCkdhdWBSOWxKY0cmQUA3LmJjLE90WihjMGldZkNoUkUwMnRrWERLVCMwRzVcPFB0NlYpbGwsKUtoXVg5bltjPSJiRyhEdTE0ZjQhJV4sUFhxakZONU1CMFdeQGklZyJFLmg9YGFkSzcpLiNwSSE6PWFLZGhrNFA8Q2lqYUZLcWlKYVEnLXNgOXFzXE9aXEZnLURNanQoJFxkUldSOnFkN3NnLi5HX0drQDBbLEdhM2ttLVgoVSR1XCdxSjNmLVJAMC4rXk07c2BlVTpII3BVMjplbDI5Z15PMV42cFJBNGoxJUpMSTFiUCxUYVFXW05zLFpFMTBNLm5LbygnUj8wXiJeOF5DUShqdCpfYysxQDtMTy1qLWstdWMtL2phR1RrNjEkVD9mKmdSLDZJZ1ZnbVlPYzA9R1VlIkovc04zbTskTDgiLmU2O2szMkclWFdKR2YrN3Vmb2UlbFNGKGREcj10cjddTE1tSV1fX1gxWG88W0slT1JdRiloZ3VKOD4nS2hYXyowOydXbjU+I2dXcnFOQShqRDdXViI2YXVdcVZbN0dZYV5iQkJQcWltSi9QRT5cIyswKTlkRUV0TDMsK0kpL1xtZmNAMFwpPUQlSEY4Z1Q9JTpMPiFYZEhlYzcoYCpFITJNLltKUHRVcCxCcFRiKTY9QTwtQj9jNmsmaWk3YFZgNFYiXmtVXmAndEEpMFQwPC9iY0FQamt1UU51cS9qL2ZyJl9McTk7R1w1QUVKJys4SG1vOlpwZU1EdSQkN0xhWjhUY2dYIWxcb1UvSCZtLSkzYXEsSkdMQUhAaTEvN2kpbz9ZQ2Q2Y0FrJlhpU1RPaiorOztWX1JYVW8rJCJoP1lSOTlLYDAjZ28yM241YlktcHFOTSY/UE1lRVkwKSxYIUxcVGxPI0w+MTddTV5fW2g1QmtGcS9oZUZEbmRqXSImLFRWcjdhPyljUEBsSilpcE5Nal1FbWIyPlZeZztmVmozKTdOJ0VpUS0oZkloXmglJDVTRUUsMCpLUkJGSFdoTzRTJ1dxKWthL110Vz50SjQlc3FRaEpfXiFxMj9RJE40QylVZGNmZ25xcUZFY2xZZjRmQCxtXCU8bXNubWgtMkFYcVJQbltqTjh1XXBDODkqbzoxOG5AQFhnRVhlNUAiUS9uNDJeYSQlUVo9YjMrX2EwaVVFNmBUIzRdZENLVW9jakpVXScjTUoqQCdrOCkpPzlXP09DXmUnJkxHPmFaZ2VGbHFUX0FTX0YtWkZLWiRhbiZpS3ROXTZPTEdxaV4xJkJXbCg7SE1aI1BQcio+I3I5J3JiQGVTOSptVSJ1I19OaFxpKm5hMD9BMiVHUSN0XSw+LUlkOCMhZ1A3P1otRj1rT2EucTQ3bWBrJUhmYFE+I3MobipYQkBuYkJrPWNyJVVwK01HLVJNJmI/LlEjU01XIVFeJFo0Yz90JENvMWQ8bnBfbDczdCc0QztOYkRTZj5IKmovPj0lRW8wT0JbUHJLVyhsTiptciciVmJUTSJrdFtqWz5aOTg8OmIsWj8tTVJiT0llZDwjKTxSdVk1cCk1QmBpOiNSK1hMXyRCYT5kSyUhJUJaOCRGSEBBa1heOGkmVUMqKiM6MFpmLm0rPnNPJXQpVExIZDJyUTc7KlxYcidDNCtELVslWFQ3OUZGcFRtOzc2QkAidV8iJURGTypaWkZtbV1DMTokZF5GMF9QclVxK0VvaGheXTZoUiksdW8kZkltPDUnMS1GUixmY3BLUkUrXCUyRD9ALlZVaXEmLSUpZD1PcmlZPWEiTzdIITZcPTlELTo+LypvQENZRlRtYiItNSVraEMqSjhKSldHTyNDSCxxMC09RS0raG0+KTslZVNSP184VyhxXEtkJihxXX4+ZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgMTMKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDYxIDAwMDAwIG4gCjAwMDAwMDAxMjIgMDAwMDAgbiAKMDAwMDAwMDIyOSAwMDAwMCBuIAowMDAwMDAwMzM3IDAwMDAwIG4gCjAwMDAwMDA0NDYgMDAwMDAgbiAKMDAwMDAwMDU1NiAwMDAwMCBuIAowMDAwMDAwNzYxIDAwMDAwIG4gCjAwMDAwMDA5NjYgMDAwMDAgbiAKMDAwMDAwMTAzNSAwMDAwMCBuIAowMDAwMDAxMzUyIDAwMDAwIG4gCjAwMDAwMDE0MTggMDAwMDAgbiAKMDAwMDAwNDc0NyAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9JRCAKWzxmMmFiZjQyYTlmMGVjNTJkYzk2ZTlmYTQyZTU0ZDc4ZD48ZjJhYmY0MmE5ZjBlYzUyZGM5NmU5ZmE0MmU1NGQ3OGQ+XQolIFJlcG9ydExhYiBnZW5lcmF0ZWQgUERGIGRvY3VtZW50IC0tIGRpZ2VzdCAob3BlbnNvdXJjZSkKCi9JbmZvIDkgMCBSCi9Sb290IDggMCBSCi9TaXplIDEzCj4+CnN0YXJ0eHJlZgo2MjU0CiUlRU9GCg==";

// Reveal-on-scroll (with failsafe so nothing stays hidden if observer never fires)
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });
  reveals.forEach((el) => observer.observe(el));
  // Failsafe: after 250ms reveal anything still hidden
  setTimeout(() => reveals.forEach(el => el.classList.add('visible')), 250);
} else {
  reveals.forEach(el => el.classList.add('visible'));
}
document.getElementById('year').textContent = new Date().getFullYear();

// =====================================================================
// CV MODAL
// =====================================================================
let captchaAnswer = 0;

function newCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  document.getElementById('capA').textContent = a;
  document.getElementById('capB').textContent = b;
  captchaAnswer = a + b;
  const inp = document.getElementById('cv_captcha');
  if (inp) inp.value = '';
}

function openCvModal() {
  document.getElementById('cvModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('formState').classList.remove('hidden');
  document.getElementById('successState').classList.remove('show');
  document.getElementById('formError').classList.remove('show');
  newCaptcha();
  setTimeout(() => {
    const n = document.getElementById('cv_name');
    if (n) n.focus();
  }, 200);
}

function closeCvModal() {
  document.getElementById('cvModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cvModal').addEventListener('click', (e) => {
  if (e.target.id === 'cvModal') closeCvModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCvModal();
});

function showError(msg) {
  const el = document.getElementById('formError');
  el.textContent = msg;
  el.classList.add('show');
}
function clearError() {
  document.getElementById('formError').classList.remove('show');
}

function triggerDownload() {
  // Decode embedded base64 PDF to a Blob and trigger download
  const bin = atob(CV_PDF_B64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = CV_FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.getElementById('cvForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearError();

  const name    = document.getElementById('cv_name').value.trim();
  const email   = document.getElementById('cv_email').value.trim();
  const company = document.getElementById('cv_company').value.trim();
  const role    = document.getElementById('cv_role').value.trim();
  const message = document.getElementById('cv_message').value.trim();
  const honey   = document.getElementById('cv_website').value;
  const captcha = parseInt(document.getElementById('cv_captcha').value, 10);

  if (honey) return;

  if (!name || !email || !company) {
    showError('Please fill in name, email and company.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('Please enter a valid email address.');
    return;
  }
  if (captcha !== captchaAnswer) {
    showError('Verification answer is not correct. Please try again.');
    newCaptcha();
    return;
  }

  const btn = document.getElementById('cvSubmit');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  if (WEB3FORMS_KEY && WEB3FORMS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
    try {
      const fd = new FormData();
      fd.append('access_key', WEB3FORMS_KEY);
      fd.append('subject', 'CV request — ' + name + ' (' + company + ')');
      fd.append('from_name', 'anwar.es — CV form');
      fd.append('name', name);
      fd.append('email', email);
      fd.append('company', company);
      fd.append('role', role);
      fd.append('message', message);
      await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
    } catch (_) { /* still grant download */ }
  }

  document.getElementById('thanksName').textContent = name.split(' ')[0] || 'friend';
  document.getElementById('formState').classList.add('hidden');
  document.getElementById('successState').classList.add('show');
  setTimeout(triggerDownload, 300);

  btn.disabled = false;
  btn.textContent = 'Send & Download';
  document.getElementById('cvForm').reset();
});

// Expose globally for inline onclick handlers
window.openCvModal = openCvModal;
window.closeCvModal = closeCvModal;
