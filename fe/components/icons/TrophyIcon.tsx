import React from 'react'

function TrophyIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4.666a1 1 0 011-1h28a1 1 0 011 1v7.167h8.333a1 1 0 011 1c0 8.113-4.879 12.542-10.111 12.664C40.23 31.589 34.632 35.999 28 35.999s-12.23-4.41-14.222-10.502c-5.233-.122-10.112-4.55-10.112-12.664a1 1 0 011-1H13V4.666zm28 15.922V5.666H15v14.946c.013 7.423 5.855 13.387 13 13.387 7.152 0 13-5.977 13-13.411zm2-6.755v9.597c3.513-.484 6.963-3.54 7.305-9.597H43zm-30 6.755v-6.755H5.694c.342 6.056 3.792 9.113 7.306 9.597V20.588zm15 15.745a1 1 0 011 1v3.666h4.883a1 1 0 01.834.45l4.618 7a1 1 0 01-.835 1.55h-21a1 1 0 01-.852-1.524l4.305-7a1 1 0 01.852-.476H27v-3.666a1 1 0 011-1zm-8.711 11.666l3.075-5h10.98l3.298 5H19.29z"
        fill="url(#paint0_linear_1639_25968)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1639_25968"
          x1={3.35048}
          y1={3.66602}
          x2={58.3238}
          y2={41.824}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default TrophyIcon
