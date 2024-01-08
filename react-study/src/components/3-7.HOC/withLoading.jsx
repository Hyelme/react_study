import React, { useEffect, useState } from 'react'

/**
 * 고차 컴포넌트(HOC, Higher Order Component)
 * - 고차 컴포넌트는 컴포넌트 로직을 재사용하기 위한 react의 고급기술이다.
 * - 고차 컴호넌트는 React API의 일부가 아니며, react의 구성적 특성에서 나오는 패턴이다.
 * - 구체적으로 고차 컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수이다.
 */
export default function withLoading(Component) {
    const WithLoadingComponent = (props) => {
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 1000);

            return () => clearTimeout(timer);
        }, []);
        return (
            loading ? <p>Loading...</p> : <Component {...props} />
        )
    }

    return WithLoadingComponent;
}
