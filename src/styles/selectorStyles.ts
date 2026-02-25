const selectorStyles = () => ({
    control: (styles: any) => {
        return {
        ...styles,
        border: "1px solid #000000",
        padding: "0px 8px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "none",
        color: "#000000",
        outline: "none",
        cursor: "pointer",
        "&:hover": {
            outline: "none",
            backgroundColor: "#e5e7eb",
            boxShadow: "none",
            color: "#000000"
        },
        "&:focus": {
            border: "2px solid #000000",
            outline: "none",
            boxShadow: "none"
        },
        "&:disabled": {
            opacity: "50%",
            pointerEvents: "none"
        }
        }
    },
    option: (styles: any, state: any) => {
        return {
            ...styles,
            backgroundColor: state.isSelected ? "#FF4B44" : "#ffffff",
            color: state.isSelected ? "#ffffff" : "#000000",
            outline: "none",
            "&:hover": {
                backgroundColor: "#FF4B44",
                color: "#fff",
            }
        }
    },
    indicatorSeparator: (styles: any) => ({
        ...styles,
        backgroundColor: "#000000",
        opacity: 0.1
    }),
    dropdownIndicator: (styles: any) => ({
        ...styles,
        color: "#000000",
        "&:hover": {
            color: "#000000"
        }
    }),
    menuPortal: (base: any) => ({
      ...base,
      zIndex: 10
    }),
    menu: (provided: any) => ({
      ...provided,
      animation: 'dropdownAnimation 0.2s ease',
      transformOrigin: 'top',
      zIndex: 10,
      border: "1px solid #000000",
      outline: "none",
      backgroundColor: "#ffffff",
      borderRadius: "10px"
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: 0,
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "none",
      outline: "none"
    }),
    container: (provided: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      outline: "none"
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      outline: "none"
    }),
    singleValue: (styles: any) => ({
        ...styles,
        color: "#000000"
    }),
    placeholder: (styles: any) => ({
        ...styles,
        color: "#000000"
    })
})

export { selectorStyles };
