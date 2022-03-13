return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: primary,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: primary,
            }}
          >
            Name
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 35,
              color: primary,
            }}
          >
            45
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 2,
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 15, color: primary }}>Age - {item.age}</Text>
          <Text style={{ fontSize: 15, color: primary }}>
            First Age - 18
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 15, color: primary }}>
            Gender - Male
          </Text>
          <Text style={{ fontSize: 15, color: primary }}>Route - {admin}</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
          }}
        >
          <Text style={{ fontSize: 13.5, color: primary }}>Dose - {ldose}</Text>
          <Text style={{ fontSize: 15, color: primary }}>
            N. Drugs - 3
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )