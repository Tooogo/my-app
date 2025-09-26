import Script from 'next/script'

export const DatadogScript = () => {
  return (
    <>
      <Script
        id="dd-rum-sync"
        src="https://www.datadoghq-browser-agent.com/ap1/v6/datadog-rum.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Script id="datadog-rum">
        {`
          (window.DD_RUM && window.DD_RUM.init({
            clientToken: '${process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN}',
            applicationId: '${process.env.NEXT_PUBLIC_DD_APPLICATION_ID}',
            site: 'ap1.datadoghq.com',
            service: 'my-app',
            env: '${process.env.NEXT_PUBLIC_DATADOG_ENV}',
            sessionSampleRate: 100,
            sessionReplaySampleRate: 10,
            defaultPrivacyLevel: 'mask-user-input',
          }));
        `}
      </Script>
    </>
  )
}
